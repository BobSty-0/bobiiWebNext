<style lang="css" scoped>
@import "/css/pages/app.css";
</style>

<template>
  <div>
    <navbar/>
    <section class="hero-section">
        <div class="content">
          <div class="hero-text">
            <h2>Bring your server to another level</h2>
            <p>
                With Bobii, one of the most advanced discord bots for temporary voice channels.
            </p>
            <button onclick="window.location.href='https://discord.com/api/oauth2/authorize?client_id=776028262740393985&permissions=8799599586321&scope=bot%20applications.commands';">Invite now</button>
          </div>
          <div class="preview-picture-logo">
            <img src="/resources/logo.png" width="450">
          </div>
        </div>
    </section>

    <section class="temp-channel-section">
      <div class="content" id="flex">
        <div class="preview-picture-tempchannel" id="picture">
          <img class="tempChannelSlideShow" src="/resources/temp_channel.gif" width="450">
          <img class="tempChannelSlideShow" src="/resources/Interface.png" width="450">
        </div>
        <div class="text" id="text">
            <h2>Temporary Voice Channels</h2>
            <p>
                Bobii can create temporary voice channels.
                These are automatically deleted as soon as the last user 
                leaves the temporary voice channel.
            </p>
            <button>Learn more</button>
          </div>
        </div>
    </section>

    <section class="text-utility-section">
      <div class="content">
        <div class="text">
          <h2>Text Utility</h2>
          <p>
              Bobii can steal emojis and create clean looking announcements with embeds.
          </p>
          <button>Learn more</button>
        </div>

        <div class="preview-picture-text-utility">
          <img src="/resources/text_utilty.gif" width="450">
        </div>
      </div>
    </section>

    <fusszeile/>
  </div>
</template>

<script>

</script>

