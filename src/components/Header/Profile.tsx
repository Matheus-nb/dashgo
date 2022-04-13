import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}


export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex
      align="center"
    >

      {showProfileData && (
        <Box
          mr="4"
          textAlign="right"
        >

          <Text>Matheus Anderson</Text>

          <Text
            color="gray.300"
            fontSize="sm"
          >
            Matheusalg.id@gmail.com
          </Text>

        </Box>
      )}

      <Avatar
        size="md"
        name="Matheus Anderson"
        src="https://github.com/Matheus-nb.png"
      >

      </Avatar>

    </Flex>
  )
}