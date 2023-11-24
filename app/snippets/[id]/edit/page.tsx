import SnippetEditForm from '@/components/snippet-edit-form';
import { db } from '@/db';
import { notFound } from 'next/navigation';
import React from 'react'


type SnippetEditPageProps = {
    params: {
        id: string,
    }
}

export default async function EditSnippetPage(props: SnippetEditPageProps) {
    const id = +props.params.id;
    const snippet = await db.snippet.findFirst({where:{ id } });

    if(!snippet){
        return notFound();
    }
    
    return (
    <div>
        <h2>Edit Snippet: {snippet.title}</h2>
        <SnippetEditForm snippet={snippet} />
    </div>
  )
}