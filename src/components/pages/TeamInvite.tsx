"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useTeam } from "../../lib/hooks/useTeam";
import { UserPlus } from 'lucide-react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../lib/firebase';

const inviteSchema = z.object({
  memberId: z.string().min(1, "Member ID is required"),
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  photoURL: z.string().url("Invalid URL"),
  role: z.enum(["admin", "member"], "Invalid role"),
});

type InviteFormValues = z.infer<typeof inviteSchema>;

export function TeamInvite() {
  const [open, setOpen] = useState(false);

  const form = useForm<InviteFormValues>({
    resolver: zodResolver(inviteSchema),
  });

  async function onSubmit(data: InviteFormValues) {
    await addDoc(collection(db, 'members'), {
      id: data.memberId,
      name: data.name,
      email: data.email,
      photoURL: data.photoURL,
      role: data.role,
    });

    form.reset();
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="gap-2 bg-cyberpunk-accent text-cyberpunk-900 hover:bg-cyberpunk-600">
          <UserPlus className="h-4 w-4" />
          Invite Member
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-cyberpunk-800 text-cyberpunk-100 border-cyberpunk-600">
        <DialogHeader>
          <DialogTitle className="text-cyberpunk-accent">Invite Team Member</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="memberId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-cyberpunk-300">Member ID</FormLabel>
                  <FormControl>
                    <Input placeholder="MID12" {...field} />
                  </FormControl>
                  <FormMessage className="text-cyberpunk-accent" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-cyberpunk-300">Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage className="text-cyberpunk-accent" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-cyberpunk-300">Email Address</FormLabel>
                  <FormControl>
                    <Input placeholder="john.doe@example.com" type="email" {...field} />
                  </FormControl>
                  <FormMessage className="text-cyberpunk-accent" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="photoURL"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-cyberpunk-300">Photo URL</FormLabel>
                  <FormControl>
                    <Input placeholder="https://example.com/photo.jpg" type="url" {...field} />
                  </FormControl>
                  <FormMessage className="text-cyberpunk-accent" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-cyberpunk-300">Role</FormLabel>
                  <FormControl>
                    <select {...field} className="bg-cyberpunk-700 border-cyberpunk-600 text-cyberpunk-100">
                      <option value="admin">Admin</option>
                      <option value="member">Member</option>
                    </select>
                  </FormControl>
                  <FormMessage className="text-cyberpunk-accent" />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full bg-cyberpunk-accent text-cyberpunk-900 hover:bg-cyberpunk-600">
              Add Member
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
