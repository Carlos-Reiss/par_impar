import React, { Dispatch, SetStateAction, useEffect } from "react";
import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

type TipoProp = "Par" | "Impar";
type Props = {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
};
const styles = StyleSheet.create({
  container: {
    zIndex: 0,
    width: "90%",
    height: "60%",
    backgroundColor: "#f5f5f5",
    borderRadius: 30,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
  },
  subContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  normalText: {
    fontFamily: "Inter-SemiBoldItalic",
    fontSize: 24,
    fontWeight: "bold",
  },
  normalButtonText: {
    fontFamily: "Inter-SemiBoldItalic",
    fontSize: 24,
    color: "#FFF",
    fontWeight: "bold",
  },
  button: {
    marginTop: 20,
    backgroundColor: "#f5f5f5",
    height: 64,
    borderRadius: 10,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonClear: {
    marginTop: 20,
    backgroundColor: "#666",
    height: 64,
    borderRadius: 10,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
  },
  superText: {
    fontFamily: "Inter-SemiBoldItalic",
    fontSize: 184,
    fontWeight: "bold",
  },
  buttonEye: {
    backgroundColor: "#f5f5f5",
    zIndex: 99,
    position: "absolute",
    borderRadius: 50,
    right: 40,
    top: 80,
    padding: 10,
    shadowColor: "#999",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.9,
    shadowRadius: 2,
    elevation: 2,
  },
});
// adicionar componente para exibir
const Home: React.FC<Props> = ({ setCount, count }) => {
  const [tipo, setTipo] = useState<TipoProp>("Par");
  const [open, setOpen] = useState<boolean>(true);

  const handleParImpar = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    count % 2 === 0 ? setTipo("Par") : setTipo("Impar");
  }, [count]);

  return (
    <>
      <View
        style={styles.buttonEye}
      >
        <TouchableOpacity onPress={() => setOpen(!open)}>
          {open ? (
            <Feather name="eye" size={24} color="black" />
          ) : (
            <Feather name="eye-off" size={24} color="black" />
          )}
        </TouchableOpacity>
      </View>

      {open && (
        <View style={styles.container}>
          <View style={styles.subContainer}>
            <View>
              <Text style={styles.superText}>{count}</Text>
            </View>
          </View>
        </View>
      )}

      <TouchableOpacity style={styles.button} onPress={handleParImpar}>
        <Text style={styles.normalText}>{tipo}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        disabled={count === 0}
        style={styles.buttonClear}
        onPress={() => setCount(0)}
      >
        <Text style={styles.normalButtonText}>Reiniciar</Text>
      </TouchableOpacity>
    </>
  );
};

export default Home;
