"use client"

import { supabase } from '@/lib/supabase'
import { useEffect, useState } from 'react'
import Wheel from './Wheel'

type Drink = {
  id: string
  name: string
  description: string
}

export default function ShotsRandom() {
  const [drinks, setDrinks] = useState<Drink[]>([])

  useEffect(() => {
    const fetchDrinks = async () => {
      const { data } = await supabase
        .from('shots')
        .select('*')

      if (data) setDrinks(data)
    }

    fetchDrinks()
  }, [])

  return <Wheel drinks={drinks} />
}