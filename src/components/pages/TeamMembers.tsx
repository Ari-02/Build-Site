import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Badge } from '../ui/badge';
import { ScrollArea } from '../ui/scroll-area';
import { db } from '../../lib/firebase'; // Import Firestore
import { collection, getDocs } from 'firebase/firestore';

export function TeamMembers() {
  const [team, setTeam] = useState({ members: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        setLoading(true);
        const teamCollection = collection(db, 'members');
        const teamSnapshot = await getDocs(teamCollection);
        const teamData = teamSnapshot.docs.map(doc => doc.data());
        setTeam({ members: teamData });
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);

  if (loading) {
    return <p className="text-cyberpunk-100">Loading team members...</p>;
  }

  if (error) {
    return <p className="text-red-500">Error: {error.message}</p>;
  }

  const members = team.members || [];

  return (
    <Card className="bg-cyberpunk-800 border-cyberpunk-600">
      <CardHeader>
        <CardTitle className="text-cyberpunk-accent">Team Members</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-4">
            {members.length === 0 ? (
              <p className="text-cyberpunk-300">No team members found.</p>
            ) : (
              members.map((member) => (
                <div
                  key={member.id}
                  className="flex items-center justify-between p-2 rounded-lg hover:bg-cyberpunk-700"
                >
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={member.photoURL} />
                      <AvatarFallback className="bg-cyberpunk-600 text-cyberpunk-100">
                        {member.name.split(' ').map((n) => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-cyberpunk-100">{member.name}</p>
                      <p className="text-sm text-cyberpunk-300">{member.email}</p>
                    </div>
                  </div>
                  <Badge
                    variant={member.role === 'admin' ? 'default' : 'outline'}
                    className="bg-cyberpunk-accent text-cyberpunk-900"
                  >
                    {member.role}
                  </Badge>
                </div>
              ))
            )}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
