'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'
import {
  ArrowLeft02Icon,
  CheckmarkCircle02Icon,
  Clock01Icon,
  Share01Icon,
  Stamp01Icon,
} from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { useState } from 'react'
import { motion } from 'motion/react'

type Props = {}

export default function Page({}: Props) {
  const [participants] = useState([
    { id: '1', name: 'You', status: 'paid', avatar: '/you.png' },
    { id: '2', name: 'Olabode', status: 'paid', avatar: '/ola.png' },
    { id: '3', name: 'Lukmon', status: 'paid', avatar: '/lukeman.png' },
    { id: '4', name: 'Hope', status: 'unpaid', avatar: '/ola.png' },
    { id: '5', name: 'Dara', status: 'unpaid', avatar: '/dara.png' },
  ])
  return (
    <div className="bg-[#e5e7ea] min-h-svh flex items-center justify-center  overflow-auto">
      <div className="max-w-lg px-4 bg-[#f8f9fc] pb-12 shadow mx-auto w-full">
        {/* Navbar */}
        <div className=" py-4 mt-2 flex items-center gap-3 justify-between">
          <button className="bg-white rounded-full p-1.5">
            <HugeiconsIcon icon={ArrowLeft02Icon} size={24} />
          </button>
          <p className="font-medium">Payment Status</p>
          <button className="bg-white rounded-full p-1.5">
            <HugeiconsIcon icon={Share01Icon} size={24} />
          </button>
        </div>

        <div className="relative pt-8">
          <div className="mt-3 w-full absolute top-0 h-[100px] from-[#636363] rounded-2xl pt-4 to-[#333333] bg-linear-to-b">
            <div className="max-w-[92%] mx-auto h-6 rounded-2xl bg-black w-full" />
          </div>
          <div className="h-[590px] relative overflow-hidden">
            <motion.div
              initial={{ y: -600, opacity: 0, overflow: 'hidden' }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative max-w-[84%] mx-auto h-[590px]   z-20 bg-white rounded shadow  "
            >
              <div className="absolute inset-0 w-full  h-10 z-10 top-0 bg-linear-to-b from-black " />
              <div className="py-2 px-3">
                <p className="py-1.5 mt-3 text-center  border-y custom-dash mx-auto px-2">
                  Trip Invoice - Japan Summer 2025
                </p>
                <div className="mt-3 text-sm py-3 space-y-1 border-b ">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Total </span>
                    <span className="font-medium">$30,000</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Per Person </span>
                    <span className="font-medium">$6,000</span>
                  </div>
                </div>
                <div className="mt-4">
                  {participants.map((item, index) => {
                    return (
                      <div key={index} className=" border-b flex items-center">
                        <div className="border-r py-2 px-2">
                          <Avatar>
                            <AvatarImage src={'/img' + item.avatar} />
                            <AvatarFallback>{item.avatar}</AvatarFallback>
                          </Avatar>
                        </div>
                        <span className="pl-2">{item.name}</span>
                        <span className="w-max ml-auto text-sm border rounded-md px-1 py-0.5 flex gap-1">
                          <HugeiconsIcon
                            icon={
                              item.status === 'paid'
                                ? CheckmarkCircle02Icon
                                : Clock01Icon
                            }
                            size={20}
                            className={cn({
                              'fill-green-400 text-white':
                                item.status === 'paid',
                              'fill-orange-400 text-white':
                                item.status === 'unpaid',
                            })}
                          />

                          <span className=" capitalize">{item.status}</span>
                        </span>
                      </div>
                    )
                  })}
                </div>

                <div className="p-3 border rounded-lg mt-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-normal">Payment Status</p>
                    <p className="font-medium uppercase text-xl">UNPAID</p>
                  </div>
                  <div className=" flex  items-center mt-3">
                    <div className="bg-white rounded-full p-1 shadow">
                      <HugeiconsIcon
                        icon={CheckmarkCircle02Icon}
                        size={20}
                        className="fill-green-500 text-white"
                      />
                    </div>
                    <div className="h-2 w-full bg-black" />
                    <div className="bg-white rounded-full p-1 shadow">
                      <HugeiconsIcon
                        icon={CheckmarkCircle02Icon}
                        size={20}
                        className="fill-green-500 text-white"
                      />
                    </div>
                    <div className="h-2 w-full bg-black" />
                    <div className="bg-white rounded-full p-1 shadow">
                      <HugeiconsIcon
                        icon={CheckmarkCircle02Icon}
                        size={20}
                        className="fill-green-500 text-white"
                      />
                    </div>
                    <div className="h-2 w-full bg-black" />
                    <div className="bg-white rounded-full p-2 shadow">
                      <div className="bg-black size-[18px] rounded-full" />
                    </div>
                    <div className="h-2 w-full bg-secondary" />
                    <div className="bg-white rounded-full p-1 shadow">
                      <HugeiconsIcon
                        icon={Stamp01Icon}
                        size={20}
                        className=""
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-4 pb-4  gap-4 flex flex-wrap sm:flex-nowrap items-center justify-between">
                  <button className="bg-[#2e3140] w-full rounded-full text-sm text-white px-6 py-2">
                    Send Reminder
                  </button>
                  <button className="bg-white w-full shadow text-sm rounded-full px-6 py-2">
                    Download Invoice
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="border-b mt-8" />

        <div className="flex px-3 items-center justify-between gap-3 pt-4">
          <p className="text-muted-foreground">Payment Method</p>
          <div className="flex w-max items-center gap-2 ">
            <p className="w-max ml-auto text-muted-foreground">
              Visa Ending 2986
            </p>
            <div className="h-8 w-10 rounded-sm bg-blue-800" />
          </div>
        </div>
        <motion.button
          initial={{
            y: 20,
            opacity: 0,
          }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="py-2 sm:py-4 px-4 text-lg mt-4 w-full rounded-2xl bg-[#2e3140] text-white"
        >
          Pay Now
        </motion.button>
      </div>
    </div>
  )
}
