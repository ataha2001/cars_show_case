import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react'
import Image from 'next/image'
import { Fragment, useState } from 'react'
import { manufacturers } from '@/constants'
import clsx from 'clsx'


const SearchManufacturer = ({selected, setSelected}) => {
    const [query, setQuery] = useState('')
    // const [selected, setSelected] = useState(manufacturer[1])

    const filteredManufacturers = 
        query === '' 
        ? manufacturers 
        : manufacturers.filter((item)=>(
            item.toLocaleLowerCase()
            .replace(/\s+/g,"")
            .includes(query.toLocaleLowerCase().replace(/\s+/g,""))
    ))

  return (
    <div className='search-manufacturer'>
       <Combobox value={selected} onChange={setSelected} onClose={() => setQuery('')}>
        <div className="relative w-full">
          <ComboboxButton className='absolute inset-y-0 left-0 '>
            <Image src={'/car-logo.svg'} alt='car logo' width={20} height={20} className='ml-1' />
          </ComboboxButton>
          <ComboboxInput
            placeholder='Volkswagen'
            className={clsx(
              'w-full rounded-lg border-none bg-gray-100 py-1.5 pr-8 pl-3 text-sm/6 text-black ps-7',
              'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
            )}
            displayValue={(manufacturer: string)=> manufacturer}
            onChange={(event) => setQuery(event.target.value)}
          />
          <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
            {/* <ChevronDownIcon className="size-4 fill-white/60 group-data-[hover]:fill-white" /> */}
          </ComboboxButton>
        </div>

        <ComboboxOptions
          anchor="bottom"
          transition
          className={clsx(
            'w-[var(--input-width)] rounded-xl border border-gray-100 bg-gray-100 p-1 [--anchor-gap:var(--spacing-1)] empty:invisible',
            'transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0'
          )}
        >
          {filteredManufacturers.map((item) => (
            <ComboboxOption
              key={item}
              value={item}
              className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-gray-300"
            >
              {/* <CheckIcon className="invisible size-4 fill-white group-data-[selected]:visible" /> */}
              <div className="text-sm/6 text-black">{item}</div>
            </ComboboxOption>
          ))}
        </ComboboxOptions>
      </Combobox>
    </div>
  )
}

export default SearchManufacturer


{/*
   <Combobox value={manufacturer} onChange={setManufacturer}>
            <div className="relative w-full ">
                <ComboboxButton className='absolute top-[14px]'>
                    <Image src={'/car-logo.svg'} alt='car logo' width={20} height={20} className='ml-4' />
                </ComboboxButton>
                <ComboboxInput 
                    className={'search-manufacturer__input'}
                    placeholder='Volkswagen'
                    displayValue={(manufacturer: string)=> manufacturer}
                    onChange={(e)=> setQuery(e.target.value)}
                />
                <Transition 
                    as={Fragment}
                    leave='transition ease-in duration-100'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                    afterLeave={()=> setQuery('')}

                >
                    <ComboboxOptions>
                        {filteredManufacturers.map((item)=>(
                                <ComboboxOption 
                                    key={item}
                                    className={({ active }) => `
                                        relative search-manufacturer__option
                                        ${active ? 'bg-primary-blue text-white' 
                                            : 'text-gay-900'
                                        }
                                    `}  
                                    value={item}
                                    >
                                        {({ selected, active}) => (
                                            <>
                                            <span
                                              className={`block truncate ${
                                                selected ? 'font-medium' : 'font-normal'
                                              }`}
                                            >
                                              {item}
                                            </span>
                                            {selected ? (
                                              <span
                                                className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                                  active ? 'text-white' : 'text-teal-600'
                                                }`}
                                              >
                                                </span>
                                              ) : null}
                                            </>
                                          )}
                                  </ComboboxOption>
                              )
                          )}
                      </ComboboxOptions>
                  </Transition>
              </div>
          </Combobox>
  
  */}