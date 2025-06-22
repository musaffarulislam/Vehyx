import DamageReportSection from '@/components/reportPage/DamageReportSection'
import DetailedHistorySection from '@/components/reportPage/DetailedHistorySection'
import HistorySection from '@/components/reportPage/HistorySection'
import IconSection from '@/components/reportPage/IconSection'
import LogoSection from '@/components/reportPage/LogoSection'
import QuestionSection from '@/components/reportPage/QuestionSection'
import RecallsSection from '@/components/reportPage/RecallsSection'
import ReportSection from '@/components/reportPage/ReportSection'
import ServiceReportSection from '@/components/reportPage/ServiceReportSection'
import StolenSection from '@/components/reportPage/StolenSection'
import WarningSection from '@/components/reportPage/WarningSection'
import React from 'react'

const page = () => {
  return (
    <div className='mx-24 flex flex-col gap-8'>
        <LogoSection />
        <ReportSection />
        <IconSection />
        <WarningSection />
        <QuestionSection />
        <HistorySection />
        <ServiceReportSection />
        <DamageReportSection /> 
        <StolenSection />
        <RecallsSection />
        <DetailedHistorySection />
        <LogoSection isDescription={false} />
    </div>
  )
}

export default page