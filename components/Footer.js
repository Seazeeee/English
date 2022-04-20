import { Box, IconButton } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

export const Footer = () => {
    return (
        <Box align="center" fontSize="sm">
            Conect with Me on Github.
            <IconButton
            as="a"
            href="https://github.com/Seazeeee"
            aria-label="Github"
            icon={<FaGithub fontSize="1.25rem" />}
            />
        </Box>
    );
};

