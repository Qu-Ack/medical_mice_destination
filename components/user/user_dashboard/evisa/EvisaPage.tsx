import React from 'react'
import EvisaChecklist from './EvisaChecklist'
import EvisaProcess from './EvisaProcess'

const EvisaContainer = () => (
  <div className="grid gap-24 bg-blue-50 px-24 py-8 lg:grid-cols-2">
    <EvisaProcess />
    <EvisaChecklist />
  </div>
)

const EvisaPage = () => <EvisaContainer />

export default EvisaPage
