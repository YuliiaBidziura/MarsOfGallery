import React, { useState, useEffect} from "react";
import { Form, Button, Image} from 'react-bootstrap';
import { observer } from 'mobx-react-lite'
import Iframe from 'react-iframe';
import '../App.css'

const Menu = observer(() => {
    const [rover, setTheRover] = useState('curiosity');
    const [camera, setTheCamera] = useState('fhaz');
    const [sol, setTheSol] = useState('0');
    const [data, setData] = useState([])
    const [ansv, setAnsver] = useState('bool')
    const [page, setPage] = useState(1)

    const API_KEY = 'CaNQPl0BRDULI8HQT1eyjOg6TZIfP3ObkKTfPEvA'

    useEffect(() => {
        fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&camera=${camera}&page=${page}&api_key=${API_KEY}`)
            .then(response => response.json())
            .then(json => {
                if (json.photos.length <= 0) {
                    setAnsver(false);
                    updatePage()
                    setData([])
                    console.log('page: ' + page)
                } else {
                    for (let i = 0; i < json.photos.length; i++) {
                        setData(json.photos)
                    }
                    setAnsver(true);
                }
            })
    }, [rover, sol, camera, page])

    const newArray = data.map(e => e.img_src)
    const addPage = () => {
        setPage(page + 1);
    }
    const updatePage = () => {
        setPage(1);
    }
    const arr = ['https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png', 'https://i.natgeofe.com/n/46b07b5e-1264-42e1-ae4b-8a021226e2d0/domestic-cat_thumb_2x3.jpg', 'https://th-thumbnailer.cdn-si-edu.com/bZAar59Bdm95b057iESytYmmAjI=/1400x1050/filters:focal(594x274:595x275)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/95/db/95db799b-fddf-4fde-91f3-77024442b92d/egypt_kitty_social.jpg', 'https://senfil.net/uploads/posts/2015-10/1445189255_111.jpg', 'https://cdn.abo.media/upload/article/o_1dvorekjt1lhq18mf5mg11ov0s1k.jpg', 'https://lifeimg.pravda.com/images/doc/c/5/c55cc96-kit-755.jpg', 'https://images.squarespace-cdn.com/content/v1/55ba71f7e4b00dce923b869f/1597165716653-FOGV6WNGY6OSRGY8T7WA/image-asset.jpeg?format=1500w']
    return (
        <div className="menu">
            <Form>
                <h2>Rover</h2>
                <div className="d-flex align-items-center justify-content-center pover1">
                    <div className="div1" >
                        <Iframe src="https://mars.nasa.gov/gltf_embed/24584" width="350" height="350px" frameborder="0" />
                        <Button
                            variant="outline-dark"
                            onClick={() => setTheRover(`curiosity`)}
                            className="btnWithIframe"
                            active={`${rover}` === `curiosity`}
                        >
                            Curiosity
                        </Button>
                    </div>
                    <div className="div1">
                        <Iframe src='https://solarsystem.nasa.gov/gltf_embed/2370' width='350' height='350px' frameborder='0' />
                        <Button
                            variant="outline-dark"
                            onClick={() => setTheRover(`opportunity`)}
                            className="btnWithIframe"
                            active={`${rover}` === `opportunity`}
                        >
                            Opportunity
                        </Button>
                    </div>
                    <div className="div1">
                        <Iframe src="https://mars.nasa.gov/gltf_embed/24883" width="350" height="350px" frameborder="0" />
                        <Button
                            variant="outline-dark"
                            onClick={() => setTheRover(`spirit`)}
                            className="btnWithIframe"
                            active={`${rover}` === `spirit`}
                        >
                            Spirit
                        </Button>
                    </div>
                </div>
                <h2 style={{ alignItems: 'center', marginTop: 30 }}>Camera</h2>
                <div className="mt-2 d-flex align-items-center justify-content-center">
                    <Button
                        variant="outline-dark"
                        onClick={() => setTheCamera('fhaz')}
                        className="btnCamera"
                        active={`${camera}` === `fhaz`}
                    >
                        Front Hazard Avoidance Camer
                    </Button>
                    <Button
                        variant="outline-dark"
                        onClick={() => setTheCamera('rhaz')}
                        className="btnCamera"
                        active={`${camera}` === `rhaz`}
                    >
                        Rear Hazard Avoidance Camera
                    </Button>
                    <Button
                        variant="outline-dark"
                        onClick={() => setTheCamera('mast')}
                        className="btnCamera"
                        active={`${camera}` === `mast`}
                    >
                        Mast Camera
                    </Button>
                    <Button
                        variant="outline-dark"
                        onClick={() => setTheCamera('chemcam')}
                        className="btnCamera"
                        active={`${camera}` === `chemcam`}
                    >
                        Chemistry and Camera Complex
                    </Button>
                    <Button
                        variant="outline-dark"
                        onClick={() => setTheCamera('mahli')}
                        className="btnCamera"
                        active={`${camera}` === `mahli`}
                    >
                        Mars Hand Lens Imager
                    </Button>
                    <Button
                        variant="outline-dark"
                        onClick={() => setTheCamera('mardi')}
                        className="btnCamera"
                        active={`${camera}` === `mardi`}
                    >
                        Mars Descent Imager
                    </Button>
                    <Button
                        variant="outline-dark"
                        onClick={() => setTheCamera('navcam')}
                        className="btnCamera"
                        active={`${camera}` === `navcam`}
                    >
                        Navigation Camera
                    </Button>
                    <Button
                        variant="outline-dark"
                        onClick={() => setTheCamera('pancam')}
                        className="btnCamera"
                        active={`${camera}` === `pancam`}
                    >
                        Panoramic Camera
                    </Button>
                    <Button
                        variant="outline-dark"
                        onClick={() => setTheCamera('minites')}
                        className="btnCamera"
                        active={`${camera}` === `minites`}
                    >
                        Miniature Thermal Emission Spectrometer (Mini-TES)
                    </Button>
                </div>
                <div>
                    <h2 style={{ marginTop: 30 }}>Sol</h2>
                    <div className="d-flex flex-column align-items-center justify-content-center">
                        <p style={{ fontSize: 20 }}>Enter the day on Mars defined in Sol.</p>
                        <Form.Control
                            className="mt-1"
                            style={{ width: 300, marginBottom: 10 }}
                            value={sol}
                            placeholder="Enter the sol number: (0-n)"
                            onChange={(e) => setTheSol(e.target.value)}
                        >
                        </Form.Control>
                    </div>
                </div>
            </Form>
            <div className="gallery">
                {
                    ansv ?
                        // arr.map(e => <Image className="centerImg" src={`${e}`} width={450} height={450} style={{ marginRight: 10, marginLeft: 10, marginBottom: 10, marginTop: 10 }} />)
                        newArray.map(e => <Image className="centerImg" src={`${e}`} width={450} height={450} style={{ marginRight: 10, marginLeft: 10, marginBottom: 10, marginTop: 10 }} />)
                        :
                        <p className="p">No photos! (Change camera or other settings...)</p>
                }
                {
                    (newArray.length === 25) ?
                        <Button
                            variant="outline-dark"
                            onClick={() => addPage()}
                            style={{ cursor: 'pointer', width: 350, height: 60 }}
                        >
                            Add photo
                        </Button>
                        :
                        <p className="p">That's all...</p>
                }
            </div>
        </div>
    );
});

export default Menu;