import { Credit } from '@/components/person/Credit';
import type { CreditsResponse } from '@/shared/types/movies';
import { Flex, Text } from '@mantine/core';

type creditListPropType = {
  credits: CreditsResponse | undefined;
};

export const CreditList = ({ credits }: creditListPropType) => {
  const cast = credits?.cast ?? [];
  const displayedCast = cast.slice(0, 8);
  return (
    <Flex direction={'column'}>
      <Text>
        Cast & Crew
      </Text>
      <Flex justify={'space-between'}>
        {
          displayedCast.map((cast) => (
            <Credit
              key={cast.id}
              cast={cast}
            />
          ))
        }
      </Flex>
    </Flex>
  );
};
