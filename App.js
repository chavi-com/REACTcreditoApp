import {useState, useEffect, useRef} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity,TextInput } from 'react-native';

export default function App() {
  const [nombre, setNombre] = useState('');
  const [fecha, setFecha] = useState('');
  const [montop,setMontop] = useState([]);
  const [tipop,setTipop] = useState('');
  const [numc,setNumc] = useState([]);
  const [valorc,setValorc] = useState([]);
  const [totald,setTotald] = useState('')
  // Referencias a elementos
  let refNombre = useRef()
  const guardar = () => {
    //Agregar datos al array a través del método setSalarios para el array salarios
    setSalarios(misalarios => [...misalarios,{nombre:nombre,salario:salario}] );
    //console.log(salarios);
    setNombre('');
    setSalario('')
    refNombre.current.focus();
  }
  
  let buscar = (nombuscar) =>{
    let nomenc = salarios.find(sal => sal.nombre == nombre);
    if (nomenc != undefined){
      setSalario(nomenc.salario);
    }
    else{
      alert("Nombre no hallado");
    }
  }
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <TextInput
        placeholder='Nombre'      
        onChangeText={nombre => setNombre(nombre)}
        value={nombre}
        ref={refNombre}
      />
      <TextInput
        placeholder='fecha'      
        onChangeText={fecha => setSalario(fecha)}
        value={salario}
      /> 
      <TextInput
        placeholder='monto del prestamo'      
        onChangeText={montop => setNombre(montop)}
        value={nombre}
        ref={refNombre}
      />
      <TextInput
        placeholder='tipo de prestamo'      
        onChangeText={nombre => setNombre(nombre)}
        value={nombre}
        ref={refNombre}
      />
      <TextInput
        placeholder='Numero de cuotas'      
        onChangeText={nombre => setNombre(nombre)}
        value={nombre}
        ref={refNombre}
      />
      <TextInput
        placeholder='valor de cuotas'      
        onChangeText={nombre => setNombre(nombre)}
        value={nombre}
        ref={refNombre}
      />
      <TextInput
        placeholder='total deuda'      
        onChangeText={nombre => setNombre(nombre)}
        value={nombre}
        ref={refNombre}
      />

      <TouchableOpacity
        onPress={guardar}
        style={{backgroundColor:'green'}}
      >
          <Text style={{color:'white', padding:5}}>Guardar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={buscar}
        style={{backgroundColor:'green'}}
      >
          <Text style={{color:'white', padding:5}}>Buscar</Text>
      </TouchableOpacity>
      <Text>{'\n'}</Text>
      <View>
      {
          salarios.map(sal => {
            return (
              <View style={{flex:1, flexDirection:'row',flexWrap:'wrap'}}>
                <Text style={{marginRight:10}}>{sal.nombre}</Text>
                <Text>{new Intl.NumberFormat('es-CO').format(sal.salario)}</Text>
              </View>
            );
          })
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});