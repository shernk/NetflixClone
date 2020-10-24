import React from 'react';
import {useContent} from '../../hooks/index';

export default function Browse(){
  const {series} = useContent('series');
  const {films} = useContent('films');

  return <p>browse page</p>;
}