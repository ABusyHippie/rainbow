import lang from 'i18n-js';
import { map } from 'lodash';
import React, { Fragment } from 'react';
import { OpacityToggler } from '../animations';
import { UniswapInvestmentRow } from '../investment-cards';
import { SavingsListHeader } from '../savings';
import { useOpenInvestmentCards } from '@rainbow-me/hooks';

const renderInvestmentsListRow = item => (
  <UniswapInvestmentRow assetType="uniswap" item={item} key={item.uniqueId} />
);

export default function PoolsListWrapper({
  data,
  totalValue = '0',
  isCoinListEdited,
}) {
  const {
    isInvestmentCardsOpen,
    toggleOpenInvestmentCards,
  } = useOpenInvestmentCards();

  if (isCoinListEdited) {
    return null;
  }
  return (
    <Fragment>
      <SavingsListHeader
        emoji="whale"
        isOpen={!!isInvestmentCardsOpen}
        onPress={toggleOpenInvestmentCards}
        savingsSumValue={totalValue}
        showSumValue
        title={lang.t('pools.pools_title')}
      />
      <OpacityToggler
        isVisible={!isInvestmentCardsOpen}
        pointerEvents={isInvestmentCardsOpen ? 'auto' : 'none'}
      >
        {map(data, renderInvestmentsListRow)}
      </OpacityToggler>
    </Fragment>
  );
}
