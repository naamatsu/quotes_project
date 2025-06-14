import React, { useCallback, useEffect, useState } from "react";
import type { Quote, QuoteMap } from "../types";
import { Table, Th, Td, Tag, Controls, Button, PageInfo} from './QuotesGrid.styles';
import { getQuotes } from "../services/quotes.service";

interface QuoteGridProps {
   count: number;

}

const QuotesGrid: React.FC<QuoteGridProps> = ({ count }) => {
    const [quotesMap, setQuotesMap] = useState<QuoteMap>({});
    const [continuationToken, setContinuationToken] = useState<string>();
    const [totalPages, setTotalPages] = useState<number>(0);
    const [currentPage, setCurrentPage] = useState<number>(1)

     const fetchQuotesPaged = async () => {
        const result = await getQuotes({ count, continuationToken })
        setQuotesMap({...quotesMap, [currentPage]: result.quotes });
        setContinuationToken(result.continuationToken);
        setTotalPages(result.totalPages);
    };

    const reset = () => {
        setQuotesMap({});
        setContinuationToken(undefined);
        setTotalPages(0);
        setCurrentPage(1);
    }

    useEffect(() => {
        if (count > 0 && !quotesMap[currentPage]){
            fetchQuotesPaged();
        }
       
    }, [currentPage])

     useEffect(() => {
        if (count > 0) {
            reset()
            fetchQuotesPaged();
        }
    }, [count])
  
   const quotes = currentPage ? quotesMap[currentPage] : [];
   if (!quotes?.length) return null;

   return (
        <>
            <Table>
                <thead>
                <tr>
                    <Th>Quote</Th>
                    <Th>Author</Th>
                    <Th>Tags</Th>
                </tr>
                </thead>
                <tbody>
                {quotes.map((quote: Quote) => (
                    <tr key={quote.id}>
                    <Td>{quote.body}</Td>
                    <Td>{quote.author}</Td>
                    <Td>
                        {quote.tags.map((tag, i) => (
                        <Tag key={i}>{tag}</Tag>
                        ))}
                    </Td>
                    </tr>
                ))}
                </tbody>
            </Table>
            <Controls>
                <Button
                onClick={() => setCurrentPage((prev) => prev - 1)}
                disabled={currentPage === 1}
                >
                ← Prev
                </Button>

                <PageInfo>
                Page {currentPage} of {totalPages} ({count} quotes)
                </PageInfo>

                <Button
                onClick={() => setCurrentPage((prev) => prev + 1)}
                disabled={currentPage === totalPages}
                >
                Next →
                </Button>
            </Controls>
        </>
    )
}

export default QuotesGrid