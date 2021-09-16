import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Compounding Pharmacy',
  description: 'We sell the best products for cheap',
  keywords:
    'skincare, dispensing, compounding, serums, peels, peeling solutions, creams, ointments, eczema, psorasis, brightening, skin, acne, salicylic acid, lactic acid, glycolid acid, hydrafacial serums, vitamin c, vitamin c serum',
}

export default Meta
