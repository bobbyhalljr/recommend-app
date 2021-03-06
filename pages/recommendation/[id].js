import React, { useState } from 'react'
import { useRouter } from 'next/router'
import {
  Box,
  Avatar,
  Text,
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Lorem,
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton
} from '@chakra-ui/react'

import Layout from '../../components/layout'
import SolidButton from '../../components/buttons/solidButton'
import OutlineButton from '../../components/buttons/outlineButton'
import CustomHeading from '../../components/heading/customHeading'

export default function Recommendation() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [alert, setAlert] = useState(true)
  const router = useRouter()
  const { id } = router.query

  return (
    <Layout>
      <CustomHeading
        title="Review your information"
        description="Look over your information and make sure everything is correct"
      />
      <Box
        d="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        boxShadow="xl"
        p="6"
        my="16"
        border="1px solid #f5f5f5"
        position="relative"
        borderTop="4px solid #29B6F6"
        borderRadius="2xl"
        w={['90%', '100%']}
      >
        <Avatar
          mb="10"
          size="2xl"
          boxShadow="xl"
          position="absolute"
          top="-35"
          lef="0"
        />
        <Box mt="24">
          <Text color="gray.400" fontSize={['sm', 'md']} fontWeight="bold">
            Name:
          </Text>
          <Text fontSize={['md', 'lg']} fontWeight="600" mb="6">
            Bobby Hall Jr
          </Text>

          <Text color="gray.400" fontSize={['sm', 'md']} fontWeight="bold">
            Email:
          </Text>
          <Text fontSize={['md', 'lg']} fontWeight="600" mb="6">
            bobbyhalljr@gmail.com
          </Text>

          <Text color="gray.400" fontSize={['sm', 'md']} fontWeight="bold">
            Company:
          </Text>
          <Text fontSize={['md', 'lg']} fontWeight="600" mb="6">
            Lambda School
          </Text>

          <Box
            mb="16"
            mt="10"
            w={['100%', '1/2']}
            maxW="xl"
            wordBreak="break-word"
          >
            <Text
              mb="1"
              color="gray.400"
              fontSize={['sm', 'md', 'lg']}
              fontWeight="bold"
            >
              Recommendation:
            </Text>
            <Text fontSize={['md', 'lg']} fontWeight="600" mb="6">
              "This is my super awesome recommendation!
              bhfjgdivhkerjfbdhivjfbvihlfdbvujhbdfvbleudfibkvedfhugvbekrdf
              vlhbrefdvrfdbhviberfkdbvidbg."
            </Text>
          </Box>
        </Box>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Lorem count={2} />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {alert ? (
        <Alert
          colorScheme="green"
          fontWeight="500"
          bg="green.100"
          color="green.600"
          mt="4"
          fontSize="sm"
          borderRadius="xl"
        >
          <AlertIcon />
          <Box flex="1" align-items="flex-start">
            <AlertTitle>Your in Control</AlertTitle>
            <AlertDescription>
              We do NOT share your recommendation. You can share your
              recommendation at any time in your profile under recommandations.
            </AlertDescription>
          </Box>
          <CloseButton
            position="absolute"
            right="8px"
            top="8px"
            onClick={() => setAlert(false)}
          />
        </Alert>
      ) : (
        <Button borderRadius="xl" onClick={() => setAlert(true)}>
          show alert
        </Button>
      )}
      <SolidButton
        text="Publish Recommendation"
        href="/recommendation/share/[id]"
        as={`/recommendation/share/${id}`}
        callback={() => onOpen}
      />

      <OutlineButton
        text="Edit Recommandation"
        href="/recommendation/create"
        as="/recommendation/create"
      />
    </Layout>
  )
}
