'use client'
import { CustomFilterProps } from '@/types'
import { Fragment, useState} from 'react'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from '@headlessui/react'
import Image from 'next/image'
import clsx from 'clsx'
import { useRouter } from 'next/navigation'
import { updateSearchParams } from '@/utils'

const CustomFilter = ({title, options, setFilter}: CustomFilterProps) => {
  const [selected, setSelected] = useState(options[0])
  

  return (
    <div className='w-fit '>
      <Listbox value={selected} onChange={(e)=> {
        setSelected(e) 
        setFilter(e.value)}}>
        <div className="relative w-fit z-10">
        <ListboxButton className={'custom-filter__btn'}>
          <span className="block truncate  ">{selected.title}</span>
          <Image src={'/chevron-up-down.svg'} alt='chevron up down' width={20} height={20}
          className='ml-4 object-contain' />
        </ListboxButton>

        <ListboxOptions
          anchor="bottom"
          transition
          className={clsx(
            'w-[var(--button-width)] rounded-xl border border-white/5 bg-gray-50 p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none',
            'transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0'
          )}
        >
          {options.map((option) => (
            <ListboxOption key={option.title} value={option} as={Fragment}>
            {({ focus, selected }) => (
              <div className={clsx('flex gap-2', focus && 'bg-blue-100')}>
                {/* <CheckIcon className={clsx('size-5', !selected && 'invisible')} /> */}
                {option.title}
              </div>
            )}
          </ListboxOption>
            
          ))}
        </ListboxOptions>
        
        </div>

      </Listbox>

    </div>
  )
}

export default CustomFilter