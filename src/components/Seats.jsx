import styled from "styled-components";

export default function Seats() {
    return (
        <>
            <ContainerSeats>
                <Seat>01</Seat>
                <Seat>02</Seat>
                <Seat>03</Seat>
                <Seat>04</Seat>
                <Seat>05</Seat>
                <Seat>06</Seat>
                <Seat>07</Seat>
                <Seat>08</Seat>
                <Seat>09</Seat>
                <Seat>10</Seat>
                <Seat>01</Seat>
                <Seat>02</Seat>
                <Seat>03</Seat>
                <Seat>04</Seat>
                <Seat>05</Seat>
                <Seat>06</Seat>
                <Seat>07</Seat>
                <Seat>08</Seat>
                <Seat>09</Seat>
                <Seat>10</Seat>
                <Seat>11</Seat>
                <Seat>12</Seat>
                <Seat>13</Seat>
                <Seat>14</Seat>
                <SeatSelected>15</SeatSelected>
                <SeatSelected>16</SeatSelected>
                <Seat>17</Seat>
                <Seat>18</Seat>
                <Seat>19</Seat>
                <Seat>20</Seat>
                <Seat>21</Seat>
                <Seat>22</Seat>
                <Seat>23</Seat>
                <Seat>24</Seat>
                <Seat>25</Seat>
                <Seat>26</Seat>
                <Seat>27</Seat>
                <SeatUnavailable>28</SeatUnavailable>
                <SeatUnavailable>29</SeatUnavailable>
                <SeatUnavailable>30</SeatUnavailable>
                <Seat>31</Seat>
                <Seat>32</Seat>
                <Seat>33</Seat>
                <Seat>34</Seat>
                <Seat>35</Seat>
                <Seat>36</Seat>
                <Seat>37</Seat>
                <Seat>38</Seat>
                <Seat>39</Seat>
                <Seat>30</Seat>
                <Seat>41</Seat>
                <Seat>42</Seat>
                <Seat>43</Seat>
                <Seat>44</Seat>
                <Seat>45</Seat>
                <Seat>46</Seat>
                <Seat>47</Seat>
                <Seat>48</Seat>
                <Seat>49</Seat>
                <Seat>50</Seat>
            </ContainerSeats>
            <ContainerSeatsIconsStatus>
                <Status>
                    <PickedIcon />
                    <StatusText>Selecionado</StatusText>
                </Status>

                <Status>
                    <AvalaibleIcon />
                    <StatusText>Disponível</StatusText>
                </Status>

                <Status>
                    <UnavailableIcon />
                    <StatusText>Indisponível</StatusText>
                </Status>
            </ContainerSeatsIconsStatus>
        </>
    );
}

const Status = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ContainerSeatsIconsStatus = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 286px;
    margin-top: -2px;
`;

const StatusText = styled.p`
    margin-top: 5px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    display: flex;
    align-items: center;
    letter-spacing: -0.013em;
    color: #4E5A65;    
`;

const AvalaibleIcon = styled.button`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    text-align: center;
    color: #000000;   
    width: 26px;
    height: 26px;
    background: #C3CFD9;
    border: 1px solid #808F9D;
    border-radius: 12px;    
`;

const UnavailableIcon = styled.button`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    text-align: center;
    color: #000000;   
    width: 26px;
    height: 26px;
    background: #FBE192;
    border: 1px solid #F7C52B;
    border-radius: 17px;   
`;

const PickedIcon = styled.button`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    text-align: center;
    color: #000000;   
    width: 26px;
    height: 26px;
    background: #1AAE9E;
    border: 1px solid #0E7D71;
    border-radius: 17px; 
`;

const ContainerSeats = styled.div`
    width: 375px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    display: flex;
    padding-left: 24px;
    margin-right: 24px;
    margin-top: -13px;
`;

const Seat = styled.button`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    text-align: center;
    color: #000000;   
    width: 26px;
    height: 26px;
    background: #C3CFD9;
    border: 1px solid #808F9D;
    border-radius: 12px;
    margin-right: 7px;
    margin-bottom: 18px;
`;

const SeatSelected = styled.button`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    text-align: center;
    color: #000000;   
    width: 26px;
    height: 26px;
    background: #1AAE9E;
    border: 1px solid #0E7D71;
    border-radius: 17px;
    margin-right: 7px;
    margin-bottom: 18px;
`;

const SeatUnavailable = styled.button`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    text-align: center;
    color: #000000;   
    width: 26px;
    height: 26px;
    background: #FBE192;
    border: 1px solid #F7C52B;
    border-radius: 12px;
    margin-right: 7px;
    margin-bottom: 18px;
`;