import React, { useState, useEffect } from "react";
import ImageService from "../services/ImageService";
import { Icon,  Menu, Table,Image } from "semantic-ui-react";
import { useParams } from "react-router-dom";
export default function ImageList() {
    const [images, setImages] = useState([]);
    let{id}=useParams();
    useEffect(() => {
      let imageService = new ImageService();
      imageService.getImages(id).then((result) => setImages(result.data.data));
    }, []);
  
    return (
        <div>
             <Table celled color="violet">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Image</Table.HeaderCell>
       
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {images.map((image) => (
            <Table.Row key={image.id}>
              <Table.Cell><div><Image src={image.url} size="medium" circular centered /></div>  </Table.Cell>
        
            </Table.Row>
          ))}
        </Table.Body>

        {/* <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer> */}
      </Table>
        </div>
    )
}
