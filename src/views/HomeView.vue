<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
let modals = ref({
  1: false,
  2: false,
  3: false,
  4: false,
});
const showMenu = ref(false);
const showMenuThreshold = 250;
const scrollbarWidth = computed(() => {
  return showModal(1).value ||
    showModal(2).value ||
    showModal(3).value ||
    showModal(4).value
    ? window.innerWidth - document.body.offsetWidth + "px"
    : "0px";
});

const showModal = (id) => modals.value[id];

const openModal = (id) => {
  modals.value[id] = true;
  document.body.style.overflow = "hidden";
  document.body.style.paddingRight = scrollbarWidth.value;
};

const closeModal = (id) => {
  modals.value[id] = false;
  document.body.style.overflow = "auto";
  document.body.style.paddingRight = "0px";
};

onMounted(() => {
  window.addEventListener("mousemove", handleMouseMove);
});

onUnmounted(() => {
  window.removeEventListener("mousemove", handleMouseMove);
});

function handleMouseMove(e) {
  if (e.clientX <= showMenuThreshold) {
    showMenu.value = true;
  } else {
    showMenu.value = false;
  }
}
</script>

<template>
  <div style="height: 100%" class="flex h-full bg-gray-200">
    <div
      v-show="showMenu"
      class="w-64 bg-white p-4 shadow-lg absolute z-20 left-0 transition-all h-full"
    >
      <div class="w-64 bg-white p-4 shadow-lg h-full">
        <h2 class="text-xl font-bold mb-4">Меню</h2>
        <button @click="openModal(4)" class="btn text-blue-500 hover:underline">
          Регистрация
        </button>
        <ul class="h-full">
          <li class="mb-2">
            <router-link
              :to="{ name: 'settings' }"
              class="text-blue-500 hover:underline"
              >Регистрация</router-link
            >
          </li>
          <li class="mb-2">
            <router-link
              :to="{ name: 'user', params: { id: 123 } }"
              class="text-blue-500 hover:underline"
            >
              Пользователь 123
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <main class="flex-1 p-4">
      <header class="mb-4">
        <h1 class="text-2xl font-bold">Главная</h1>
      </header>
      <div class="bg-red-700 font-sans m-0 h-screen">
        <div class="empty-div flex bg-gray-300 p-5 justify-center"></div>
        <div
          class="container mx-auto flex items-center justify-center bg-red-600 p-5 h-24 text-center"
        >
          <button
            @click="openModal(1)"
            class="btn rounded-2xl bg-transparent mb-5 w-24 h-10 px-2 py-1 leading-10 text-black border-2 border-black font-bold flex items-center justify-center"
          >
            окно 1
          </button>

          <button
            @click="openModal(2)"
            class="ml-4 btn rounded-2xl bg-transparent mb-5 w-24 h-10 px-2 py-1 leading-10 text-black border-2 border-black font-bold flex items-center justify-center"
          >
            окно 2
          </button>

          <button
            @click="openModal(3)"
            class="ml-4 btn rounded-2xl bg-transparent mb-5 w-24 h-10 px-2 py-1 leading-10 text-black border-2 border-black font-bold flex items-center justify-center"
          >
            окно 3
          </button>

          <transition name="fade" appear>
            <div
              v-if="
                showModal(1) || showModal(2) || showModal(3) || showModal(4)
              "
              class="modal fixed top-0 left-0 w-full h-full bg-blue-400 bg-opacity-70 z-10 overflow-auto box-border"
            >
              <div
                v-if="showModal(1)"
                @click.self="closeModal(1)"
                class="modal fixed top-0 left-0 w-full h-full bg-blue-400 bg-opacity-70 z-10 overflow-auto box-border"
              >
                <div
                  class="modal-content bg-black rounded-lg mx-auto p-10 w-80 max-w-md relative box-border"
                >
                  <span
                    @click="closeModal(1)"
                    class="close rounded-2xl bg-slate-500 absolute top-5 right-5 text-3xl cursor-pointer"
                    >×</span
                  >
                  <div
                    class="header text-blue-700 text-center text-2xl mb-5 font-bold"
                  >
                    Заголовок шапки
                  </div>
                  <div class="scrollable-content text-pink-500">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Veniam saepe voluptatum vel aperiam totam nesciunt in
                      laborum eius pariatur maxime debitis, corrupti quaerat
                      rem, cupiditate ea sit maiores, molestiae repellat.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Veniam saepe voluptatum vel aperiam totam nesciunt in
                      laborum eius pariatur maxime debitis, corrupti quaerat
                      rem, cupiditate ea sit maiores, molestiae repellat.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Veniam saepe voluptatum vel aperiam totam nesciunt in
                      laborum eius pariatur maxime debitis, corrupti quaerat
                      rem, cupiditate ea sit maiores, molestiae repellat.
                    </p>
                  </div>
                </div>
              </div>
              <div
                v-if="showModal(2)"
                @click.self="closeModal(2)"
                class="modal fixed top-0 left-0 w-full h-full bg-blue-400 bg-opacity-70 z-10 overflow-auto box-border"
              >
                <div
                  class="modal-content bg-black rounded-lg mx-auto p-10 w-80 max-w-md relative box-border"
                >
                  <span
                    @click="closeModal(2)"
                    class="close rounded-2xl bg-slate-500 absolute top-5 right-5 text-3xl cursor-pointer"
                    >×</span
                  >
                  <div
                    class="header text-blue-700 text-center text-2xl mb-5 font-bold"
                  >
                    Заголовок шапки2
                  </div>
                  <div class="scrollable-content text-pink-500">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Veniam saepe voluptatum vel aperiam totam nesciunt in
                      laborum eius pariatur maxime debitis, corrupti quaerat
                      rem, cupiditate ea sit maiores, molestiae repellat.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Veniam saepe voluptatum vel aperiam totam nesciunt in
                      laborum eius pariatur maxime debitis, corrupti quaerat
                      rem, cupiditate ea sit maiores, molestiae repellat.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Veniam saepe voluptatum vel aperiam totam nesciunt in
                      laborum eius pariatur maxime debitis, corrupti quaerat
                      rem, cupiditate ea sit maiores, molestiae repellat.
                    </p>
                  </div>
                </div>
              </div>
              <div
                v-if="showModal(3)"
                @click.self="closeModal(3)"
                class="modal fixed top-0 left-0 w-full h-full bg-blue-400 bg-opacity-70 z-10 overflow-auto box-border"
              ></div>
              <div
                v-if="showModal(4)"
                @click.self="closeModal(4)"
                class="modal fixed top-0 left-0 w-full h-full bg-blue-400 bg-opacity-70 z-10 overflow-auto box-border"
              >
                <div
                  class="modal-content bg-black rounded-lg mx-auto p-10 w-80 max-w-md relative box-border"
                >
                  <span
                    @click="closeModal(4)"
                    class="close rounded-2xl bg-slate-500 absolute top-5 right-5 text-3xl cursor-pointer"
                    >×</span
                  >
                  <div
                    class="header text-blue-700 text-center text-2xl mb-5 font-bold"
                  >
                    Регистрация
                  </div>
                  <div class="scrollable-content text-pink-500">
                    <form action="" method="post">
                      <div class="mb-4">
                        <label
                          class="block text-grey-darker text-sm font-bold mb-2"
                          for="username"
                        >
                          Email
                        </label>
                        <input
                          class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                          id="username"
                          type="email"
                          placeholder="Ваш Email"
                        />
                      </div>
                      <div class="mb-6">
                        <label
                          class="block text-grey-darker text-sm font-bold mb-2"
                          for="password"
                        >
                          Пароль
                        </label>
                        <input
                          class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3"
                          id="password"
                          type="password"
                          placeholder="Ваш Пароль"
                        />
                      </div>
                      <input
                        class="btn btn-primary"
                        type="submit"
                        value="Регистрация"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>

      <section>
        
      </section>
    </main>
  </div>
</template>
