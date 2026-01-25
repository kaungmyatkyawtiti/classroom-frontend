'use client'

import ClassDetailBox from '@/components/ClassDetailBox'
import PageContainer from '@/components/PageContainer'
import { Button } from '@/components/ui/button'
import { MOCK_CLASSES } from '@/constants/dummy'
import { RefreshCcw, SquarePen } from 'lucide-react'
import { use } from 'react'

export default function ClassDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = use(params)
  const classInfo = MOCK_CLASSES.find(c => c.id === id);
  console.log("classInfo", classInfo);

  if (!classInfo) {
    return <div>Class not found</div>
  }

  return (
    <PageContainer dynamicLabel={classInfo.name}>
      <div className='max-w-4xl mx-auto'>
        <div className="flex items-center justify-end mb-4 gap-2">
          <Button
            size="sm"
          >
            <RefreshCcw size={18} />
            Refresh
          </Button>
          <Button
            size="sm"
            className='bg-sky-600 hover:bg-sky-600/90 text-white'
          >
            <SquarePen size={18} />
            Edit
          </Button>
        </div>

        <ClassDetailBox classInfo={classInfo} />
      </div>
    </PageContainer>
  )
}
