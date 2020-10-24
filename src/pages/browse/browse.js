import React from 'react';
import {useContent} from '../../hooks/index';
import Schema from '../../schema/schema'; 

export default function Browse(){
  const {series} = useContent('series');
  const {films} = useContent('films');
  //? firestore database is out off
  //TODO: have to create new data
  const slides = Schema({series, films});
  console.log(films);

  return <p>browse page</p>;
}