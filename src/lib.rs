use wasm_bindgen::prelude::*;

#[wasm_bindgen]
/// This method will just say whatever you put it in
pub fn say(s: &str) -> String {
  println!("The Rust function say() received {}", s);
  let r = String::from("hello ");
  return r + s;
}
