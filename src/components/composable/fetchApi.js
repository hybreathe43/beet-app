import { ref, isRef, unref, watchEffect } from "vue";
import axios from "axios";

function getSingleUser(url, uid) {
  const userData = ref(null);
  const error = ref(null);
  const getSingle = async () => {
    userData.value = null;
    error.value = null;
    try {
      const res = await axios(unref(url) + unref(uid));
      console.log(res);
      userData.value = res.data.data;
    } catch (err) {
      error.value = err;
    }
  };
  if (isRef(url)) {
    watchEffect(getSingle);
  } else {
    getSingle();
  }
  return { userData, error };
}
//post
function postUser(url, name, job) {
  const userData = ref(null);
  const error = ref(null);
  const postSingle = async () => {
    userData.value = null;
    error.value = null;
    try {
      const config = {
        method: "POST",
        url: unref(url),
        headers: { "Content-Type": "application/json" },
        data: JSON.stringify({ name: unref(name), job: unref(job) }),
      };
      const res = await axios(config);
      console.log(res);
      userData.value = res.data;
    } catch (err) {
      error.value = err;
    }
  };
  if (isRef(url)) {
    watchEffect(postSingle);
  } else {
    postSingle();
  }
  return { userData, error };
}
function updateUser(url, uid, name, job) {
  const userData = ref(null);
  const error = ref(null);
  const updateSingle = async () => {
    userData.value = null;
    error.value = null;
    try {
      const config = {
        method: "PUT",
        url: unref(url) + unref(uid),
        headers: { "Content-Type": "application/json" },
        data: JSON.stringify({ name: unref(name), job: unref(job) }),
      };
      const res = await axios(config);
      console.log(res);
      userData.value = res.data;
    } catch (err) {
      error.value = err;
    }
  };
  if (isRef(url)) {
    watchEffect(updateSingle);
  } else {
    updateSingle();
  }
  return { userData, error };
}
export { getSingleUser, postUser, updateUser };
