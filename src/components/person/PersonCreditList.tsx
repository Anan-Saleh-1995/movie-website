import { PersonCredit } from '@/components/person/PersonCredit';
import type { CreditsResponse } from '@/shared/types/person';
import { Flex, Text } from '@mantine/core';

type creditListPropType = {
  credits: CreditsResponse | undefined;
};

export const PersonCreditList = ({ credits }: creditListPropType) => {
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
            <PersonCredit
              key={cast.id}
              cast={cast}
            />
          ))
        }
      </Flex>
    </Flex>
  );
};
