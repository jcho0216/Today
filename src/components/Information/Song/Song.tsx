import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { InformationContainer } from "../styles";
import { getTop10Songs } from "../../../utils/api/song";
import { Top10SongsType } from "../../../interface/Song";
import { StarIcon } from "../../../assets/icons";
import { Subtitle } from "../../styles";

const Song: FC = (): JSX.Element => {
  const [songData, setSongData] = useState<Top10SongsType[]>([]);

  useEffect(() => {
    try {
      getTop10Songs().then((response) => {
        setSongData(response);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <InformationContainer>
      <Subtitle>노래 추천</Subtitle>
      <Top10TextBox>
        <p>Top</p>
        <p id="ten">10</p>
        <img src={StarIcon} alt="star" />
      </Top10TextBox>
      <SongContainer>
        {songData.map((value, index) => {
          return (
            <SongBox key={index}>
              <p id="rank">{index + 1}</p>
              <SongInfo>
                <img src={value.cover} alt="cover_img" />
                <SongInfoBox>
                  <p id="title">{value.track_name}</p>
                  <p id="artist">{value.artist}</p>
                </SongInfoBox>
              </SongInfo>
              <LikesBox>
                <p>likes: </p>
                <p id="up">{value.up}</p>
              </LikesBox>
            </SongBox>
          );
        })}
      </SongContainer>
    </InformationContainer>
  );
};

export default Song;

const SongContainer = styled.div`
  display: grid;
  width: 85%;
  grid-template-rows: repeat(10fr);
  gap: 5px;
`;

const Top10TextBox = styled.div`
  font-weight: 500;
  display: flex;
  gap: 4px;
  margin-top: 24px;
  margin-bottom: 18px;
  position: relative;

  #ten {
    font-weight: 900;
    z-index: 1;
  }

  img {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, 10%);
    z-index: 3;
  }
`;

const SongInfo = styled.div`
  display: flex;
  gap: 10px;
`;

const SongBox = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 10% 70% 20%;
  width: 100%;
  gap: 5px;

  #rank {
    font-weight: 600;
  }

  img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    aspect-ratio: 1/1;
    border-radius: 3px;
  }
`;

const SongInfoBox = styled.div`
  display: flex;
  flex-direction: column;

  #title {
    font-weight: 600;
  }

  #artist {
    font-weight: 400;
  }
`;

const LikesBox = styled.div`
  font-size: 12px;
  display: flex;
  gap: 4px;

  #up {
    font-weight: 700;
  }
`;
