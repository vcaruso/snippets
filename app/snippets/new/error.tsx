'use client';
import React from 'react'

type ErrorPageProps = {
    error: Error
    reset: () => void
}

export default function ErrorPage({ error }: ErrorPageProps) {
  return (
    <div>{ error.message }</div>
  )
}
