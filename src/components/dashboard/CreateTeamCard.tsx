import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Users } from 'lucide-react';
import Link from 'next/link';

export const CreateTeamCard = () => {
  return (
    <Card className="bg-cyberpunk-800 border-cyberpunk-600">
      <CardHeader>
        <CardTitle className="text-cyberpunk-accent">Create a Team</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-cyberpunk-300 mb-4">
          You're not part of any team yet. Create a team to collaborate with others and boost your productivity!
        </p>
        <Link href="/create-team" passHref>
          <Button className="bg-cyberpunk-accent text-cyberpunk-900 hover:bg-cyberpunk-600">
            <Users className="mr-2 h-4 w-4" />
            Create Team
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

