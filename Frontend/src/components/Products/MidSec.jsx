import { Box, Button, Flex, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
// import { getProducts, getTotalPages } from "../../../API/api";
// import PaginationComponent from "../../../Components/Pagination/PaginationComponent";
import ProductCard from "./card/ProductCard";

export default function MidSec({data,wishlist, page, setPage, setRender, currPage}) {
    const [allData, setAllData] = useState([])

    const totalPages = Math.ceil(allData.length/20)

    return(
        <Flex flexDir='column' zIndex='0' >
            <SimpleGrid minChildWidth='270px' placeItems='center' gap={4} 
            >
                {
                    data?.slice(0,15).map((item) => {
                        if(currPage != 'wishlist'){
                            let wish = wishlist?.filter((el) => item._id == el.productId._id)
                            // console.log(wish,'filter')
                            if(wish.length != 0){
                                return <ProductCard {...wish[0].productId} isWishlist={true} key={wish[0]._id} setRender={setRender} />
                            }
                            else return <ProductCard {...item} key={item._id} isWishlist={false} setRender={setRender} />
                        }
                        else return <ProductCard {...item.productId} key={item._id} isWishlist={true} setRender={setRender} />
                    })
                }
            </SimpleGrid>
            <Box m='auto' mt='20px' display={{base:'none', lg:'block'}}>
            </Box>
            <Box >
                <Flex justify='center' align='center' gap={3} >
                    <Button disabled={page === 1} onClick={() => setPage(page-1)} colorScheme='purple'>Prev</Button>
                    <Text fontSize='2xl'>{page}</Text>
                    <Button onClick={() => setPage(page+1)} colorScheme='whatsapp'>Next</Button>
                </Flex>
            </Box>
        </Flex>
    )
};
