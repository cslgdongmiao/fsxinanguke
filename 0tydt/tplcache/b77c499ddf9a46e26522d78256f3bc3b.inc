<div class="munu_box">
      <dl>
        <dt><a href="{dede:field name='typeurl'/}" target="_blank">{dede:field.seotitle /}</a></dt>
        {dede:arclist flag='h' row='1' titlelen='24'}
        <dd><a href="[field:arcurl/]" target="_blank" title="[field:fulltitle/]">[field:title/]</a></dd>
        {/dede:arclist}
        
        {dede:arclist  row='1' titlelen='24' orderby='weight'  }
        <dd><a href="[field:arcurl/]" target="_blank" title="[field:fulltitle/]">[field:title/]</a></dd>
        {/dede:arclist}
      </dl>
    </div>