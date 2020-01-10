import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { MessageHubControllers } from '../../utils/MessageHub';

const Filters = styled.section`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: Roboto, Arial, Helvetica, sans-serif;
  .phases {
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
    p {
      display: flex;
      align-items: center;
      cursor: pointer;
      text-transform: uppercase;
      margin-bottom: 0;
      margin-right: 25px;
      .icon {
        width: 20px;
        height: 20px;
        border: 1px solid black;
        border-radius: 4px;
        display: inline-block;
        margin-right: 5px;
        margin-bottom: 3px;
      }
    }
  }

  .categories {
    display: flex;
    justify-content: space-between;
    width: 100%;
    section {
      display: flex;
      flex-direction: column;
      h3 {
      }
    }
    .non-metals {
      min-width: 160px;
      p {
        font-size: 12px;
        margin: 0 0 5px 0;
        display: flex;
        cursor: pointer;
        .icon {
          width: 12px;
          height: 12px;
          border: 1px solid black;
          display: inline-block;
          margin-right: 5px;
          position: relative;
          bottom: -2px;
          border-radius: 100px;
        }
      }
    }
    .metals {
      div {
        overflow: hidden;
        flex-wrap: wrap;
        display: flex;
        p {
          font-size: 12px;
          margin: 0 0 5px 0;
          box-sizing: border-box;
          width: 50%;
          display: flex;
          cursor: pointer;
          .icon {
            width: 12px;
            height: 12px;
            border: 1px solid black;
            display: inline-block;
            margin-right: 5px;
            position: relative;
            bottom: -2px;
            border-radius: 100px;
          }
        }
      }
    }
  }
`

const PhaseFilter = ( props: any ) => {

  const [ useMetals, setMetals ] = useState([]);
  const [ useNonMetals, setNonMetals ] = useState([]);

  useEffect(() => {
    setMetals(props.categories[0])
    setNonMetals(props.categories[1])
  }, [ props.categories ])

  if( (useMetals == undefined ||  useMetals.length == 0) || (useNonMetals == undefined ||  useNonMetals.length == 0) ) return <div></div>
  return (
    <Filters>
      <section className="phases">
        {
          Array.from(props.phases).map((phase: any, i: number) => (

            <p key={`${phase}_${i}`} onClick={() => {props.actions.FilterByPhase(phase.toLowerCase()) }}>
              <span className={`${phase}_icon icon`}></span>
              {phase}
            </p>
          ))
        }
      </section>

      <section className="categories">
        <section className="metals">
        <h3>Metals</h3>
          <div>
            {
              Array.from(useMetals).map((cat: any, index: number) => {
                return (
                  <p key={`${cat}_${index}`} onClick={() => {props.actions.FilterByCategory(cat.toLowerCase()) }}>
                    <span className={`${cat}_icon icon`}></span>
                    {cat}
                  </p>
                )
              })
            }
          </div>
        </section>
        <section  className="non-metals">
          <h3>Non Metals</h3>
          <div>
            {
              Array.from(useNonMetals).map((cat: any, index: number) => {
                return (
                  <p key={`${cat}_${index}`} onClick={() => {props.actions.FilterByCategory(cat.toLowerCase()) }}>
                    <span className={`${cat}_icon icon`}></span>
                    {cat}
                  </p>
                )
              })
            }
          </div>
        </section>
      </section>
    </Filters>
  )
}

export default PhaseFilter;