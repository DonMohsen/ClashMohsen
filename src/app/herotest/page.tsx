"use client"
import Hero from '@/components/Hero'
import ReactQueryProvider from '@/providers/ReactQueryProvider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'

const TestHeroPage = () => {
  return (
    <div className='h-[200vh]'>
        <ReactQueryProvider>

      <Hero/>
        </ReactQueryProvider>
      
    </div>
  )
}

export default TestHeroPage