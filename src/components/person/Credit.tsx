import type { Credits as CreditType } from '@/shared/types/movies';
import { Flex, Image, Text } from '@mantine/core';

const TMDB_IMAGE_BASE = 'https://image.tmdb.org/t/p/w500';

type creditPropsType = {
  cast: CreditType;
};

export const Credit = ({ cast }: creditPropsType) => {
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
