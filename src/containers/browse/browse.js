import React, { useContext, useState, useEffect } from "react";
import Fuse from 'fuse.js';
import { ProfilesContainer } from "../profiles/profiles";
import { FirebaseContext } from "../../context/firebase";
import { Header, Loading, Card, Player } from "../../components";
import {FooterContainer} from '../../containers/footer/footer';
import * as ROUTES from '../../routes/routes';
import logo from '../../logo.svg';

export function BrowseContainer({ slides }) {
  const { firebase } = useContext(FirebaseContext);

  const [profile, setProfile] = useState({});
  const [category, setCategory] = useState('series');
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [slidesRows, setSlideRows] = useState([]);

  const user = firebase.auth().currentUser || {};

  // loading the account
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  // show the slide, optimize when the category or single item changed
  useEffect(() => {
    setSlideRows(slides[category]);
  }, [slides, category]);

  // search item
  useEffect(() => {
    const fuse = new Fuse(slidesRows, {
      keys: ['data.description', 'data.title', 'data.genre', 'data.slug']
    });

    const result = fuse.search(searchTerm).map(({item}) => item);

    if(slidesRows.length > 0 && searchTerm.length > 2 && result.length > 0){
      setSlideRows(result);
    }
    else{
      setSlideRows(slides[category]);
    }
  }, [searchTerm]);

  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
      <Header src="joker1">
        <Header.Frame>
          <Header.Group>
            <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
            <Header.TextLink
              active={category === "series" ? "true" : "false"}
              onClick={() => setCategory("series")}
            >
              Series
            </Header.TextLink>
            <Header.TextLink
              active={category === "films" ? "true" : "false"}
              onClick={() => setCategory("films")}
            >
              Films
            </Header.TextLink>
          </Header.Group>
          <Header.Group>
            <Header.Search
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
            <Header.Profile>
              <Header.Picture src={user.photoURL} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={user.photoURL} />
                  <Header.TextLink>{user.displayName}</Header.TextLink>
                </Header.Group>
                <Header.Group>
                  <Header.TextLink onClick={() => firebase.auth().signOut()}>
                    Sign out
                  </Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>

        <Header.Feature>
          <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
          <Header.Text>
            Forever alone in a crowd, failed comedian Arthur Fleck seeks
            connection as he walks the streets of Gotham City. Arthur wears two
            masks -- the one he paints for his day job as a clown, and the guise
            he projects in a futile attempt to feel like he's part of the world
            around him.
          </Header.Text>
          <Header.PlayButton>Play</Header.PlayButton>
        </Header.Feature>
      </Header>

      <Card.Group>
        {slidesRows.map((slideItem) => (
          <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
            <Card.Title>{slideItem.title}</Card.Title>
            <Card.Entities>
              {slideItem.data.map((item) => (
                <Card.Item key={item.docId} item={item}>
                  <Card.Image 
                    src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`} 
                  />
                  <Card.Meta>
                    <Card.SubTitle>{item.title}</Card.SubTitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>
            <Card.Feature category={category}>
                <Player>
                  <Player.Button />
                  <Player.Video src='/videos/bunny.mp4' />
                </Player>
            </Card.Feature>
          </Card>
        ))}
      </Card.Group>

      <FooterContainer />
    </>
  ) : (
    <ProfilesContainer user={user} setProfile={setProfile} />
  );
}
