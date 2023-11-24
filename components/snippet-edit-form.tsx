'use client';

import { Snippet } from '@prisma/client';
import React from 'react'
import Editor from '@monaco-editor/react';
import { useState } from 'react';

type SnippetEditFormProps = {
    snippet: Snippet
}

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  
    const [code, setCode] = useState(snippet.code);

    const handleEditorChange = (value: string="") => {
        setCode(value);
    };

    return (
    <div>
        <Editor 
            height='40vh'
            theme='vs-dark'
            language='javascript'
            defaultValue={snippet.code}
            options={{minimap:{enabled: false}}}
            onChange={handleEditorChange}
        />
    </div>
  )
}
