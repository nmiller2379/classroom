import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { connectToDatabase } from '@/lib/mongodb';
import User from '../../../../models/User';
import bcrypt from 'bcryptjs';

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      async authorize(credentials) {
        await connectToDatabase ();
        const user = await User.findOne({ email: credentials.email });

        if (!user) {
          throw new Error('No user found with the entered email');
        }

        const isValid = await bcrypt.compare(credentials.password, user.password);
        console.log('Password:', credentials.password);  // Plain-text password input by the user
        console.log('Hashed Password:', user.password);  // Hashed password stored in the database
        console.log('IsValid:', isValid);  // Boolean result of bcrypt comparison

        if (!isValid) {
          throw new Error('Invalid password');
        }

        return { email: user.email };
      },
    }),
  ],
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout'
  },
};

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }

