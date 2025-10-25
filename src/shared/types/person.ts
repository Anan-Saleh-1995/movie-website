export type Credits = {
  id: number,
  name: string,
  profile_path: string,
  character: string,
};

export type CreditsResponse = {
  id: string;
  cast: Credits[] ;
  crew: Credits[];
};
