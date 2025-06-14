import React, { useState } from "react";
import type { Quote } from "../types";
import { Table, Th, Td, Tag} from './QuotesGrid.styles';

interface QuoteGridProps {
   quotes: Quote[];
   done: boolean;
}

const QuotesGrid: React.FC<QuoteGridProps> = ({ quotes, done  }) => {
    if (quotes.length) {
        return (
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
    )
    }
    return null;
}

export default QuotesGrid