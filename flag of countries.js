//step 01:create an XHR object
var request=new XMLHttpRequest();
//step 02:initiate a request
request.open("GET","https://restcountries.com/v3.1/all");
//step 03 :sending the request
request.send();
//step 04 : once the data successfully loaded from the server
request.onload=function(){
   var result=JSON.parse(request.response);
   for(let i=0; i<result.length;i++){
    console.log(result[i].flags.png);
   }
}

/*

Output:
https://flagcdn.com/w320/mr.png
flag of countries.js:11 https://flagcdn.com/w320/aw.png
flag of countries.js:11 https://flagcdn.com/w320/ar.png
flag of countries.js:11 https://flagcdn.com/w320/se.png
flag of countries.js:11 https://flagcdn.com/w320/mv.png
flag of countries.js:11 https://flagcdn.com/w320/mx.png
flag of countries.js:11 https://flagcdn.com/w320/nz.png
flag of countries.js:11 https://flagcdn.com/w320/ec.png
flag of countries.js:11 https://flagcdn.com/w320/wf.png
flag of countries.js:11 https://flagcdn.com/w320/ax.png
flag of countries.js:11 https://flagcdn.com/w320/me.png
flag of countries.js:11 https://flagcdn.com/w320/pk.png
flag of countries.js:11 https://flagcdn.com/w320/pn.png
flag of countries.js:11 https://flagcdn.com/w320/zm.png
flag of countries.js:11 https://flagcdn.com/w320/sc.png
flag of countries.js:11 https://flagcdn.com/w320/my.png
flag of countries.js:11 https://flagcdn.com/w320/no.png
flag of countries.js:11 https://flagcdn.com/w320/uz.png
flag of countries.js:11 https://flagcdn.com/w320/vu.png
flag of countries.js:11 https://flagcdn.com/w320/tf.png
flag of countries.js:11 https://flagcdn.com/w320/cx.png
flag of countries.js:11 https://flagcdn.com/w320/sg.png
flag of countries.js:11 https://flagcdn.com/w320/sr.png
flag of countries.js:11 https://flagcdn.com/w320/eh.png
flag of countries.js:11 https://flagcdn.com/w320/mf.png
flag of countries.js:11 https://flagcdn.com/w320/cr.png
flag of countries.js:11 https://flagcdn.com/w320/hm.png
flag of countries.js:11 https://flagcdn.com/w320/ie.png
flag of countries.js:11 https://flagcdn.com/w320/aq.png
flag of countries.js:11 https://flagcdn.com/w320/au.png
flag of countries.js:11 https://flagcdn.com/w320/ly.png
flag of countries.js:11 https://flagcdn.com/w320/qa.png
flag of countries.js:11 https://flagcdn.com/w320/gl.png
flag of countries.js:11 https://flagcdn.com/w320/mu.png
flag of countries.js:11 https://flagcdn.com/w320/kz.png
flag of countries.js:11 https://flagcdn.com/w320/io.png
flag of countries.js:11 https://flagcdn.com/w320/al.png
flag of countries.js:11 https://flagcdn.com/w320/bh.png
flag of countries.js:11 https://flagcdn.com/w320/pg.png
flag of countries.js:11 https://flagcdn.com/w320/bi.png
flag of countries.js:11 https://flagcdn.com/w320/in.png
flag of countries.js:11 https://flagcdn.com/w320/uy.png
flag of countries.js:11 https://flagcdn.com/w320/lc.png
flag of countries.js:11 https://flagcdn.com/w320/bb.png
flag of countries.js:11 https://flagcdn.com/w320/nc.png
flag of countries.js:11 https://flagcdn.com/w320/lv.png
flag of countries.js:11 https://flagcdn.com/w320/ee.png
flag of countries.js:11 https://flagcdn.com/w320/nu.png
flag of countries.js:11 https://flagcdn.com/w320/bl.png
flag of countries.js:11 https://flagcdn.com/w320/pr.png
flag of countries.js:11 https://flagcdn.com/w320/gd.png
flag of countries.js:11 https://flagcdn.com/w320/mo.png
flag of countries.js:11 https://flagcdn.com/w320/cy.png
flag of countries.js:11 https://flagcdn.com/w320/im.png
flag of countries.js:11 https://flagcdn.com/w320/gr.png
flag of countries.js:11 https://flagcdn.com/w320/sy.png
flag of countries.js:11 https://flagcdn.com/w320/lt.png
flag of countries.js:11 https://flagcdn.com/w320/cw.png
flag of countries.js:11 https://flagcdn.com/w320/dm.png
flag of countries.js:11 https://flagcdn.com/w320/ne.png
flag of countries.js:11 https://flagcdn.com/w320/kg.png
flag of countries.js:11 https://flagcdn.com/w320/tt.png
flag of countries.js:11 https://flagcdn.com/w320/tg.png
flag of countries.js:11 https://flagcdn.com/w320/ps.png
flag of countries.js:11 https://flagcdn.com/w320/mg.png
flag of countries.js:11 https://flagcdn.com/w320/hr.png
flag of countries.js:11 https://flagcdn.com/w320/fo.png
flag of countries.js:11 https://flagcdn.com/w320/ht.png
flag of countries.js:11 https://flagcdn.com/w320/ms.png
flag of countries.js:11 https://flagcdn.com/w320/ck.png
flag of countries.js:11 https://flagcdn.com/w320/tl.png
flag of countries.js:11 https://flagcdn.com/w320/mq.png
flag of countries.js:11 https://flagcdn.com/w320/cu.png
flag of countries.js:11 https://flagcdn.com/w320/tw.png
flag of countries.js:11 https://flagcdn.com/w320/sz.png
flag of countries.js:11 https://flagcdn.com/w320/ua.png
flag of countries.js:11 https://flagcdn.com/w320/bm.png
flag of countries.js:11 https://flagcdn.com/w320/kr.png
flag of countries.js:11 https://flagcdn.com/w320/pe.png
flag of countries.js:11 https://flagcdn.com/w320/iq.png
flag of countries.js:11 https://flagcdn.com/w320/md.png
flag of countries.js:11 https://flagcdn.com/w320/sm.png
flag of countries.js:11 https://flagcdn.com/w320/ve.png
flag of countries.js:11 https://flagcdn.com/w320/gy.png
flag of countries.js:11 https://flagcdn.com/w320/ky.png
flag of countries.js:11 https://flagcdn.com/w320/kh.png
flag of countries.js:11 https://flagcdn.com/w320/cc.png
flag of countries.js:11 https://flagcdn.com/w320/mt.png
flag of countries.js:11 https://flagcdn.com/w320/lk.png
flag of countries.js:11 https://flagcdn.com/w320/il.png
flag of countries.js:11 https://flagcdn.com/w320/sd.png
flag of countries.js:11 https://flagcdn.com/w320/vi.png
flag of countries.js:11 https://flagcdn.com/w320/er.png
flag of countries.js:11 https://flagcdn.com/w320/ml.png
flag of countries.js:11 https://flagcdn.com/w320/so.png
flag of countries.js:11 https://flagcdn.com/w320/nf.png
flag of countries.js:11 https://flagcdn.com/w320/km.png
flag of countries.js:11 https://flagcdn.com/w320/ni.png
flag of countries.js:11 https://flagcdn.com/w320/ru.png
flag of countries.js:11 https://flagcdn.com/w320/ug.png
flag of countries.js:11 https://flagcdn.com/w320/nr.png
flag of countries.js:11 https://flagcdn.com/w320/ch.png
flag of countries.js:11 https://flagcdn.com/w320/pt.png
flag of countries.js:11 https://flagcdn.com/w320/tj.png
flag of countries.js:11 https://flagcdn.com/w320/ss.png
flag of countries.js:11 https://flagcdn.com/w320/bv.png
flag of countries.js:11 https://flagcdn.com/w320/fm.png
flag of countries.js:11 https://flagcdn.com/w320/as.png
flag of countries.js:11 https://flagcdn.com/w320/cz.png
flag of countries.js:11 https://flagcdn.com/w320/bw.png
flag of countries.js:11 https://flagcdn.com/w320/tn.png
flag of countries.js:11 https://flagcdn.com/w320/ai.png
flag of countries.js:11 https://flagcdn.com/w320/gw.png
flag of countries.js:11 https://flagcdn.com/w320/sk.png
flag of countries.js:11 https://flagcdn.com/w320/mh.png
flag of countries.js:11 https://flagcdn.com/w320/dz.png
flag of countries.js:11 https://flagcdn.com/w320/jm.png
flag of countries.js:11 https://flagcdn.com/w320/mz.png
flag of countries.js:11 https://flagcdn.com/w320/es.png
flag of countries.js:11 https://flagcdn.com/w320/hn.png
flag of countries.js:11 https://flagcdn.com/w320/nl.png
flag of countries.js:11 https://flagcdn.com/w320/za.png
flag of countries.js:11 https://flagcdn.com/w320/az.png
flag of countries.js:11 https://flagcdn.com/w320/mk.png
flag of countries.js:11 https://flagcdn.com/w320/gm.png
flag of countries.js:11 https://flagcdn.com/w320/lr.png
flag of countries.js:11 https://flagcdn.com/w320/lu.png
flag of countries.js:11 https://flagcdn.com/w320/cv.png
flag of countries.js:11 https://flagcdn.com/w320/bs.png
flag of countries.js:11 https://flagcdn.com/w320/ge.png
flag of countries.js:11 https://flagcdn.com/w320/ki.png
flag of countries.js:11 https://flagcdn.com/w320/tz.png
flag of countries.js:11 https://flagcdn.com/w320/cn.png
flag of countries.js:11 https://flagcdn.com/w320/gt.png
flag of countries.js:11 https://flagcdn.com/w320/st.png
flag of countries.js:11 https://flagcdn.com/w320/de.png
flag of countries.js:11 https://flagcdn.com/w320/sl.png
flag of countries.js:11 https://flagcdn.com/w320/td.png
flag of countries.js:11 https://flagcdn.com/w320/gb.png
flag of countries.js:11 https://flagcdn.com/w320/si.png
flag of countries.js:11 https://flagcdn.com/w320/th.png
flag of countries.js:11 https://flagcdn.com/w320/id.png
flag of countries.js:11 https://flagcdn.com/w320/mp.png
flag of countries.js:11 https://flagcdn.com/w320/gu.png
flag of countries.js:11 https://flagcdn.com/w320/fi.png
flag of countries.js:11 https://flagcdn.com/w320/yt.png
flag of countries.js:11 https://flagcdn.com/w320/gi.png
flag of countries.js:11 https://flagcdn.com/w320/tm.png
flag of countries.js:11 https://flagcdn.com/w320/xk.png
flag of countries.js:11 https://flagcdn.com/w320/ci.png
flag of countries.js:11 https://flagcdn.com/w320/ma.png
flag of countries.js:11 https://flagcdn.com/w320/do.png
flag of countries.js:11 https://flagcdn.com/w320/gh.png
flag of countries.js:11 https://flagcdn.com/w320/va.png
flag of countries.js:11 https://flagcdn.com/w320/je.png
flag of countries.js:11 https://flagcdn.com/w320/tr.png
flag of countries.js:11 https://flagcdn.com/w320/tv.png
flag of countries.js:11 https://flagcdn.com/w320/ir.png
flag of countries.js:11 https://flagcdn.com/w320/eg.png
flag of countries.js:11 https://flagcdn.com/w320/dk.png
flag of countries.js:11 https://flagcdn.com/w320/ke.png
flag of countries.js:11 https://flagcdn.com/w320/bg.png
flag of countries.js:11 https://flagcdn.com/w320/zw.png
flag of countries.js:11 https://flagcdn.com/w320/ao.png
flag of countries.js:11 https://flagcdn.com/w320/ng.png
flag of countries.js:11 https://flagcdn.com/w320/pl.png
flag of countries.js:11 https://flagcdn.com/w320/sn.png
flag of countries.js:11 https://flagcdn.com/w320/sh.png
flag of countries.js:11 https://flagcdn.com/w320/lb.png
flag of countries.js:11 https://flagcdn.com/w320/ws.png
flag of countries.js:11 https://flagcdn.com/w320/ph.png
flag of countries.js:11 https://flagcdn.com/w320/gg.png
flag of countries.js:11 https://flagcdn.com/w320/sv.png
flag of countries.js:11 https://flagcdn.com/w320/kw.png
flag of countries.js:11 https://flagcdn.com/w320/to.png
flag of countries.js:11 https://flagcdn.com/w320/om.png
flag of countries.js:11 https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png
flag of countries.js:11 https://flagcdn.com/w320/kn.png
flag of countries.js:11 https://flagcdn.com/w320/cf.png
flag of countries.js:11 https://flagcdn.com/w320/rs.png
flag of countries.js:11 https://flagcdn.com/w320/am.png
flag of countries.js:11 https://flagcdn.com/w320/bd.png
flag of countries.js:11 https://flagcdn.com/w320/la.png
flag of countries.js:11 https://flagcdn.com/w320/cl.png
flag of countries.js:11 https://flagcdn.com/w320/pf.png
flag of countries.js:11 https://flagcdn.com/w320/pa.png
flag of countries.js:11 https://flagcdn.com/w320/us.png
flag of countries.js:11 https://flagcdn.com/w320/np.png
flag of countries.js:11 https://flagcdn.com/w320/mm.png
flag of countries.js:11 https://flagcdn.com/w320/fk.png
flag of countries.js:11 https://flagcdn.com/w320/hu.png
flag of countries.js:11 https://flagcdn.com/w320/pw.png
flag of countries.js:11 https://flagcdn.com/w320/gq.png
flag of countries.js:11 https://flagcdn.com/w320/gn.png
flag of countries.js:11 https://flagcdn.com/w320/ae.png
flag of countries.js:11 https://flagcdn.com/w320/tc.png
flag of countries.js:11 https://flagcdn.com/w320/vg.png
flag of countries.js:11 https://flagcdn.com/w320/li.png
flag of countries.js:11 https://flagcdn.com/w320/ba.png
flag of countries.js:11 https://flagcdn.com/w320/mw.png
flag of countries.js:11 https://flagcdn.com/w320/bt.png
flag of countries.js:11 https://flagcdn.com/w320/cm.png
flag of countries.js:11 https://flagcdn.com/w320/ad.png
flag of countries.js:11 https://flagcdn.com/w320/gp.png
flag of countries.js:11 https://flagcdn.com/w320/cg.png
flag of countries.js:11 https://flagcdn.com/w320/re.png
flag of countries.js:11 https://flagcdn.com/w320/bf.png
flag of countries.js:11 https://flagcdn.com/w320/jo.png
flag of countries.js:11 https://flagcdn.com/w320/cd.png
flag of countries.js:11 https://flagcdn.com/w320/tk.png
flag of countries.js:11 https://flagcdn.com/w320/vn.png
flag of countries.js:11 https://flagcdn.com/w320/sx.png
flag of countries.js:11 https://flagcdn.com/w320/be.png
flag of countries.js:11 https://flagcdn.com/w320/um.png
flag of countries.js:11 https://flagcdn.com/w320/br.png
flag of countries.js:11 https://flagcdn.com/w320/bz.png
flag of countries.js:11 https://flagcdn.com/w320/ag.png
flag of countries.js:11 https://flagcdn.com/w320/py.png
flag of countries.js:11 https://flagcdn.com/w320/bj.png
flag of countries.js:11 https://flagcdn.com/w320/bn.png
flag of countries.js:11 https://flagcdn.com/w320/bo.png
flag of countries.js:11 https://flagcdn.com/w320/dj.png
flag of countries.js:11 https://flagcdn.com/w320/gf.png
flag of countries.js:11 https://flagcdn.com/w320/ca.png
flag of countries.js:11 https://flagcdn.com/w320/pm.png
flag of countries.js:11 https://flagcdn.com/w320/jp.png
flag of countries.js:11 https://flagcdn.com/w320/rw.png
flag of countries.js:11 https://flagcdn.com/w320/vc.png
flag of countries.js:11 https://flagcdn.com/w320/is.png
flag of countries.js:11 https://flagcdn.com/w320/by.png
flag of countries.js:11 https://flagcdn.com/w320/hk.png
flag of countries.js:11 https://flagcdn.com/w320/ls.png
flag of countries.js:11 https://flagcdn.com/w320/fj.png
flag of countries.js:11 https://flagcdn.com/w320/at.png
flag of countries.js:11 https://flagcdn.com/w320/co.png
flag of countries.js:11 https://flagcdn.com/w320/ga.png
flag of countries.js:11 https://flagcdn.com/w320/sa.png
flag of countries.js:11 https://flagcdn.com/w320/gs.png
flag of countries.js:11 https://flagcdn.com/w320/et.png
flag of countries.js:11 https://flagcdn.com/w320/bq.png
flag of countries.js:11 https://flagcdn.com/w320/mc.png
flag of countries.js:11 https://flagcdn.com/w320/kp.png
flag of countries.js:11 https://flagcdn.com/w320/it.png
flag of countries.js:11 https://flagcdn.com/w320/na.png
flag of countries.js:11 https://flagcdn.com/w320/mn.png
flag of countries.js:11 https://flagcdn.com/w320/sb.png
flag of countries.js:11 https://flagcdn.com/w320/ye.png
flag of countries.js:11 https://flagcdn.com/w320/ro.png
flag of countries.js:11 https://flagcdn.com/w320/sj.png
flag of countries.js:11 https://flagcdn.com/w320/fr.png
*/