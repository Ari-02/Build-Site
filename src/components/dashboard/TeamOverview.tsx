import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../../components/ui/avatar';
import Link from 'next/link';

export const TeamOverview = ({ team }) => {
  return (
    <Card className="bg-cyberpunk-800 border-cyberpunk-600">
      <CardHeader>
        <CardTitle className="text-cyberpunk-accent">Team Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <h3 className="text-lg font-semibold text-cyberpunk-100 mb-2">{team.name}</h3>
        <p className="text-cyberpunk-300 mb-4">{team.members.length} members</p>
        <div className="flex flex-wrap gap-2">
          {team.members.slice(0, 5).map((member) => (
            <Avatar key={member.id}>
              <AvatarImage src={member.photoURL} alt={member.name} />
              <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
            </Avatar>
          ))}
          {team.members.length > 5 && (
            <Avatar>
              <AvatarFallback>+{team.members.length - 5}</AvatarFallback>
            </Avatar>
          )}
        </div>
        <Link href="/team" passHref>
          <a className="mt-4 inline-block text-cyberpunk-accent hover:underline">View Team Details</a>
        </Link>
      </CardContent>
    </Card>
  );
};

