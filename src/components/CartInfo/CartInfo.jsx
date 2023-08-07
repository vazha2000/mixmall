import React from 'react'
import { SCartCardTable, SCartCardTableBody, SCartCardTableBox, SCartCardTableBoxImageContent, SCartCardTableBoxNameContent, SCartCardTableBoxQuantityContent, SCartCardTableBoxTotalContent, SCartCardTablleRemove, SCartInfo } from './CartInfo.styled'

export const CartInfo = ({cart}) => {
  return (
    <SCartInfo>
              {cart.length === 0 ? (
                <div>კალათა ცარიელია</div>
              ) : (
                <SCartCardTable>
                  <SCartCardTableBody>
                    {cart.map((item, index) => (
                      <SCartCardTableBox key={index}>
                        <SCartCardTableBoxImageContent>
                          <img src={item.productImage} height={"100%"} alt="" />
                        </SCartCardTableBoxImageContent>
                        <SCartCardTableBoxNameContent>
                          {item.productName}
                        </SCartCardTableBoxNameContent>
                        <SCartCardTableBoxQuantityContent>
                          22 ცალი
                        </SCartCardTableBoxQuantityContent>
                        <SCartCardTableBoxTotalContent>
                          {item.currentPrice}00 ლარი
                        </SCartCardTableBoxTotalContent>
                        <SCartCardTablleRemove>
                          X
                        </SCartCardTablleRemove>
                      </SCartCardTableBox>
                    ))}
                  </SCartCardTableBody>
                </SCartCardTable>
              )}
            </SCartInfo>
  )
}
