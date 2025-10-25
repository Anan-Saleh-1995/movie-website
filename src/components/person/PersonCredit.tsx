import { Flex, Image, Text } from '@mantine/core';
import type { Credits as CreditType } from '@/shared/types/person';
import { TMDB_IMAGE_BASE } from '@/shared/constants/tmdb';

type creditPropsType = {
  cast: CreditType;
};

export const PersonCredit = ({ cast }: creditPropsType) => {
  const { profile_path: image, name, character } = cast;
  return (
    <Flex direction={'column'} w={150} align={'center'}>
      <Image
        src={image ? TMDB_IMAGE_BASE + image : ''}
        radius={150}
        width={150}
        height={150}
      />
      <Text>
        { name }
      </Text>
      <Text>
        { character }
      </Text>
    </Flex>
  );
};
