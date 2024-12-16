"use client";

import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Button } from '../shared/Button';
import { Input } from '../ui/input';
import { LogIn, UserPlus } from 'lucide-react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

const authSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type AuthFormValues = z.infer<typeof authSchema>;

export const LoginPage: React.FC = () => {
  const { user, signInWithGoogle, signInWithEmailAndPassword, signUp } = useAuth();
  const [isSignUp, setIsSignUp] = useState(false);

  const form = useForm<AuthFormValues>({
    resolver: zodResolver(authSchema),
  });

  if (user) {
    return <Navigate to="/" replace />;
  }

  const onSubmit = async (data: AuthFormValues) => {
    try {
      if (isSignUp) {
        await signUp(data.email, data.password);
      } else {
        await signInWithEmailAndPassword(data.email, data.password);
      }
    } catch (error) {
      console.error("Authentication error:", error);
      // Handle error (e.g., show error message to user)
    }
  };

  return (
    <div className="min-h-screen bg-cyberpunk-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8 bg-cyberpunk-800 p-8 rounded-lg shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-cyberpunk-accent">
            {isSignUp ? "Join" : "Welcome to"} ProductivityMaster
          </h2>
          <p className="mt-2 text-sm text-cyberpunk-300">
            {isSignUp ? "Create an account to start your journey" : "Sign in to boost your productivity"}
          </p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-cyberpunk-300">Email Address</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="you@example.com"
                      type="email"
                      className="bg-cyberpunk-700 border-cyberpunk-600 text-cyberpunk-100"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-cyberpunk-accent" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-cyberpunk-300">Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="••••••••"
                      type="password"
                      className="bg-cyberpunk-700 border-cyberpunk-600 text-cyberpunk-100"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-cyberpunk-accent" />
                </FormItem>
              )}
            />
            <div className="flex flex-col space-y-4">
              <Button
                type="submit"
                className="w-full bg-cyberpunk-accent text-cyberpunk-900 hover:bg-cyberpunk-600"
              >
                {isSignUp ? "Sign Up" : "Sign In"}
              </Button>
              <Button
                onClick={() => setIsSignUp(!isSignUp)}
                variant="outline"
                className="w-full border-cyberpunk-accent text-cyberpunk-accent hover:bg-cyberpunk-700"
              >
                {isSignUp ? "Already have an account? Sign In" : "Need an account? Sign Up"}
              </Button>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-cyberpunk-600" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-cyberpunk-800 text-cyberpunk-300">Or continue with</span>
                </div>
              </div>
              <Button
                onClick={signInWithGoogle}
                icon={LogIn}
                className="w-full bg-cyberpunk-700 text-cyberpunk-100 hover:bg-cyberpunk-600"
              >
                Google
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};
