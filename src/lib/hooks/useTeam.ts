export function useTeam() {
  const [team, setTeam] = useState<Team | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      setTeam(null);
      setLoading(false);
      return;
    }

    const teamQuery = query(
      collection(db, 'members'),
      where('members', 'array-contains', user.uid),
      limit(1)
    );

    const unsubscribe = onSnapshot(
      teamQuery,
      (snapshot) => {
        if (snapshot.empty) {
          setTeam(null);
        } else {
          const doc = snapshot.docs[0];
          setTeam({ ...(doc.data() as Team), id: doc.id });
        }
        setLoading(false);
      },
      (err) => {
        console.error('Error fetching team data:', err);
        setError(err);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [user]);

  const createTeam = async () => {
    try {
      const newTeamDoc = await addDoc(collection(db, 'members'), {
        name: 'New Team',
        members: [user.uid],
      });

      setTeam({ id: newTeamDoc.id, name: 'New Team', members: [{ id: user.uid, name: user.displayName || '', email: user.email || '', photoURL: user.photoURL || '', role: 'admin' }] });
    } catch (err) {
      console.error('Error creating team:', err);
      setError(err as Error);
      throw err;
    }
  };

  const inviteMember = async (email: string) => {
    if (!team) throw new Error('No team found');

    try {
      await addDoc(collection(db, 'teamInvitations'), {
        teamId: team.id,
        email,
        status: 'pending',
        createdAt: Timestamp.fromDate(new Date()),
      });
    } catch (err) {
      console.error('Error sending invitation:', err);
      setError(err as Error);
      throw err;
    }
  };

  return { team, loading, error, createTeam, inviteMember };
};
