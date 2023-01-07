import { Text , Flex } from "@chakra-ui/react"

import { MdOutlineErrorOutline } from "react-icons/md"

import style from "../../styles/auth.module.css"


export default function Errordiv({formError}){
    return(
        <Flex className={style.error}>
            <Text >{formError}  </Text>
            <MdOutlineErrorOutline />
        </Flex>
    )
}