/**
 * Copyright (c) 2017-present, Wonday (@wonday.org)
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';

import Pdf from 'react-native-pdf';
import PDFGenerator from 'rn-pdf-generator';

export default class PDFExample extends React.Component {

    constructor(props){
      super(props)
      this.state = { uri: '' }
      this.generateDocument()
    }

    generateDocument(){
      PDFGenerator.fromURL('https://cesarvr.io/post/2018-05-22-create-containers/')
      .then((data)=>{
        console.log(data)
        this.setState({uri: `data:application/pdf;base64,${data}`  })
       })
      .catch(err  => {
        console.log('error->', err)
      })
    }

    render() {
        console.log('Hello World: ', this.state.uri)
         
        if(this.state.uri === '')
          return null

        return (
            <View style={styles.container}>
                <Pdf
                    source={this.state}
                    onLoadComplete={(numberOfPages,filePath)=>{
                        console.log(`number of pages: ${numberOfPages}`);
                    }}
                    onPageChanged={(page,numberOfPages)=>{
                        console.log(`current page: ${page}`);
                    }}
                    onError={(error)=>{
                        console.log(error);
                    }}
                    style={styles.pdf}/>
            </View>
        )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
    },
    pdf: {
        flex:1,
        width:Dimensions.get('window').width,
    }
});
