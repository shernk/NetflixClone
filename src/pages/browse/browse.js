import React from 'react';
import {useContent} from '../../hooks/index';
import Schema from "../../schema/schema"; 
import {BrowseContainer} from '../../containers/browse/browse';

export default function Browse(){
  const {series} = useContent('series');
  const {films} = useContent('films');
  const slides = Schema({series, films});

  return <BrowseContainer slides={slides} />;
}