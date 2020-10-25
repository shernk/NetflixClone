import React, { useContext, useState, useEffect } from "react";
import { ProfilesContainer } from "../profiles/profiles";
import { FirebaseContext } from "../../context/firebase";
import { Header ,Loading } from "../../components/index";

export function BrowseContainer({ slides }) {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  return (
    profile.displayName ? (
    <>
      {
        loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />
      }
      <Header src="joker1">
        <p>Hello</p>
      </Header>
    </>
    ) : (
      <ProfilesContainer user={user} setProfile={setProfile} />
    )
  );
}
