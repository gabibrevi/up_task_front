import React from 'react'

export default function ErrorMessage({ children }: { children: React.ReactNode }) {
    return <div className=' text-center my-4 p-3 bg-red-100 text-red-600 font-bold text-sm uppercase '>{children}</div>
}
